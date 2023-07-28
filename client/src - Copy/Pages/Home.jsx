import React from "react";
import Header from "../components/header";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import AddInvoice from "../components/addInvoice";

const Home = () => {
  const [addInvoice, setAddInvoice] = useState(false);

  const toggleInvoice = () => {
    setAddInvoice(true); // Toggle the state between true and false
  };

  return (
    <React.Fragment>
      <Header />
      <Box style={{ margin: 20 }}>
        <Typography variant="h4">Pending Invoice</Typography>
        {!addInvoice && (
          <Button
            variant="contained"
            style={{ marginTop: 20 }}
            onClick={() => toggleInvoice()}
          >
            Add Invoice
          </Button>
        )}
        {addInvoice && <AddInvoice setAddInvoice={setAddInvoice} />}
      </Box>
    </React.Fragment>
  );
};

export default Home;