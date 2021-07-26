/* eslint-disable jest/require-top-level-describe */
import { loadEnvConfig } from "@next/env";
import "@testing-library/jest-dom";
import next from "next";
import server from "./mockServer";

next({});

const setupNextTest = async () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};

beforeAll(() => {
  setupNextTest();
  server.listen();
  window.sessionStorage.clear();
});
afterEach(() => {
  server.resetHandlers();
  window.sessionStorage.clear();
});
afterAll(() => server.close());
