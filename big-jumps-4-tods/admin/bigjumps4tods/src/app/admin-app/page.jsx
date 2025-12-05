import React from "react";
import Layout from "../components/Layout"; // make sure your layout is in components/Layout.jsx

const HomePage = () => {
  return (
    <Layout>
      <section className="site-main">
        <h2>Upcoming Events</h2>
        <p>No events scheduled yet.</p>
        {/* Later you can map events from your database here */}
      </section>
    </Layout>
  );
};

export default HomePage;
