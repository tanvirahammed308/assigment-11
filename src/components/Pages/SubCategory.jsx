import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const SubCategory = () => {
  return (
    <div className="text-center mt-10 mb-10">
        <Tabs >
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
        <Tab>Title 3</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default SubCategory;
