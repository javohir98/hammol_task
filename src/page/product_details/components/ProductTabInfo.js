import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components'

const Conainer = styled.div`


    ul {
        list-style: none;
    }
`;

const ProductTabInfoHeader = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 80px;
    margin-bottom: 26px;
    border-bottom: 1px solid rgb(218, 225, 231);
    border-top-color: rgb(218, 225, 231);
    border-right-color: rgb(218, 225, 231);
    border-left-color: rgb(218, 225, 231);
`;

const HeaderTitle = styled.h5`
    border-color: rgb(233, 69, 96);
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 0px;
    margin-top: 0px;
    padding: 4px 10px;
    color: rgb(125, 135, 156);
    cursor: pointer;

    &:first-child {
        margin-right: 25px;
    }

    .react-tabs__tab--selected & {
        color: rgb(233, 69, 96);
        border-bottom: 2px solid rgb(233, 69, 96);
        border-top-color: rgb(233, 69, 96);
        border-right-color: rgb(233, 69, 96);
        border-left-color: rgb(233, 69, 96);
    }
   
`;

const ProductTabInfo = () => {
  return (
    <Conainer>
        <Tabs>
            <TabList>
                <ProductTabInfoHeader>
                    <Tab>
                        <HeaderTitle isActive={true}>
                            Description
                        </HeaderTitle>
                    </Tab>
                    <Tab>
                        <HeaderTitle isActive={false}>
                            Review (3)
                        </HeaderTitle>
                    </Tab>
                </ProductTabInfoHeader>
            </TabList>
            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    </Conainer>
  )
}

export default ProductTabInfo