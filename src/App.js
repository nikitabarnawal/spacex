import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./components/shared/header";
import Hero from "./components/hero";
import Section from "./layout/section";
import Wrapper from "./layout/wrapper";
import GridWrapper from "./layout/gridWrapper";
import LaunchCard from "./components/lauch-card";
import { useLocation } from "react-router-dom";


const MainWrapper = styled.main`
  display: block;
  position: relative;
  width: 100%;
`;

const ContentSelector = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  button {
    border: none;
    padding: 10px;
    min-width: 100px;
    margin-right: 10px;
    cursor:pointer;
  }
`;

function App() {
  const [data, setData] = useState();
  const [type, setType] = useState('launches')
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(localStorage.getItem("search") || '');

  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    if (pathname === '/launches') {
      fetchLaunches();
    }
    else if (pathname === '/rockets') {
      fetchRockets();
    }
    else {
      fetchData();
    }
  }, [location]);

  const fetchData = async () => {
    setLoading(true);
    const result = await axios(
      "http://localhost:4000?limit=5"
    );
    setData({ launches: result.data });
    setType('launches');
    setLoading(false);
  };

  const fetchLaunches = async () => {
    setLoading(true);
    const result = await axios(
      "http://localhost:4000/launches?limit=50"
    );
    console.log(70, result);
    setData({ launches: result.data });
    setType('launches');
    setLoading(false);
  }

  const fetchRockets = async () => {
    setLoading(true);
    const result = await axios(
      "http://localhost:4000/rockets?limit=5"
    );
    setData({ rockets: result.data });
    setType('rockets');
    setLoading(false);
  }

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    axios(
      `http://localhost:4000/search?search=${search}`
    ).then(response => {
      setData({ launches: response.data });
      setType("launches");
      setLoading(false);
    })
    localStorage.setItem("search", search);
  }, [search]);

  return (
    <MainWrapper>
      <Header handleSearchInput={handleSearchInput} searchInput={search} />
      <Section>
        <Hero />
      </Section>
      <Section>
        <ContentSelector>
          <button onClick={fetchLaunches}>Launches</button>
          <button onClick={fetchRockets}>rockets</button>
        </ContentSelector>
      </Section>
      <Section>
        {loading && <div>loading....</div>}

        {!loading && (
          <Wrapper>
            <GridWrapper>
              {type === 'launches' ? data.launches.map((item, index) => (
                <LaunchCard
                  key={index.toString()}
                  image={item.links.patch.small}
                  title={item.name}
                  description={item.details}
                />
              )) : data.rockets.map((item, index) => (
                <LaunchCard
                  key={index.toString()}
                  image={item.flickr_images.length > 0 ? item.flickr_images[0] : ''}
                  title={item.name}
                  description={item.description}
                />
              ))
              }
            </GridWrapper>
          </Wrapper>
        )}
      </Section>
    </MainWrapper>
  );
}

export default App;
