#!/usr/bin/env node
import express from "express";

const app = express();

app.get("/", () =>{
    console.log("Here we are");
});

app.listen(3005, () =>{
    console.log("listening on port: 3005");
});