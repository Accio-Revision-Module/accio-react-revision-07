import { useState } from "react";
import "./App.css";
import Notification from "./components/Notification";
import Table from "./components/Table";
import Accordion from "./components/Accordion";
import Tabs from "./components/Tabs";
import Caraousel from "./components/Caraousel";

const columns = [
  {
    name: "ID",
    label: "id",
  },
  {
    name: "Name",
    label: "name",
  },
  {
    name: "Age",
    label: "age",
  },
];

const data = [
  {
    id: 1,
    age: 25,
    name: "John",
  },
  {
    name: "Jane",
    age: 29,
    id: 2,
  },
  {
    id: 3,
    name: "Jeff",
    age: 33,
  },
];

const tabData = [
  {
    title: "Photos",
    data: "User photos go here",
  },
  {
    title: "Videos",
    data: "User videos go here",
  },
  {
    title: "Settings",
    data: "Modify user settings",
  },
];

const images = [
  {
    src: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
  },
  {
    src: "https://thumbs.dreamstime.com/b/summer-noon-backgrounds-beauty-daisy-flowers-47187340.jpg",
  },
  {
    src: "https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-bright-imagination-generated-by-ai_188544-9853.jpg?q=10&h=200",
  },
  {
    src: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
  },
];

function App() {
  const [show, setShow] = useState(false);

  const handleNotificationClose = () => {
    console.log("Notification Ended");
    setShow(false);
  };

  return (
    <>
      <h1>Generic UI Components</h1>
      <section style={{ margin: "2rem auto" }}>
        <h2>Notification/Snackbar Component</h2>
        <button onClick={() => setShow(true)}>Show Notif</button>
        <Notification
          showNotif={show}
          content={"hic quis optio quidem iure quibusdam."}
          duration={5000}
          closeOnHover={false}
          handleNotificationClose={handleNotificationClose}
        />
      </section>

      <section style={{ margin: "2rem auto" }}>
        <h2>Table Component</h2>
        <Table columns={columns} data={data} />
      </section>

      <section style={{ margin: "2rem auto" }}>
        <h2>Accordion Component</h2>
        <Accordion
          title={"Title"}
          data={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam eum
        sint, temporibus repudiandae ipsa itaque est fugit eos at accusamus
        quasi, reprehenderit quidem excepturi tenetur soluta facilis cupiditate
        molestias minima? Minus reprehenderit inventore, quisquam vitae deleniti
        nisi error fugiat rerum recusandae unde facere. Earum nostrum eveniet,
        quaerat et harum voluptatibus!`}
        />
      </section>

      <section style={{ margin: "2rem auto" }}>
        <h2>Tabs Component</h2>
        <Tabs data={tabData} />
      </section>

      <section style={{ margin: "2rem auto" }}>
        <h2>Caraousel Component</h2>
        <Caraousel images={images} />
      </section>
    </>
  );
}

export default App;
