import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Article from "../src/components/Article";

const article = { title: "Hello, world" };

storiesOf("Article", module).add("with title", () => (
  <Article key={article.id} article={article} />
));
