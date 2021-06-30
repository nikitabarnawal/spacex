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
  }
`;

function App() {
  const [data, setData] = useState();
  const [type, setType] = useState('launches')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.spacexdata.com/v4/launches/past?limit=10"
      );

      console.log(result.data);

      setData({ launches: result.data });
      setLoading(false);
    };
    fetchData();
  }, []);

  const fetchLaunches = async () => {
    console.log(52);
    const result = await axios(
      "https://api.spacexdata.com/v4/launches?limit=10"
    );
    setData({ launches: result.data });
    setType('launches');
    setLoading(false);
  }

  const fetchRockets = async () => {
    const result = await axios(
      "https://api.spacexdata.com/v4/rockets?limit=10"
    );
    console.log(65, result);
    setData({ rockets: result.data });
    setType('rockets');
    setLoading(false);
  }

  return (
    console.log(72, data, type) ||
    <MainWrapper>
      <Header />
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
