import Layout from "@/components/ui/Layout";
import React from "react";
import ContactMe from "@/pages/Contact/ContactMe";


const Contacts = () => {


  return (
    <Layout>
      <div>
        <div className="">
          <div>
          <ContactMe />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;