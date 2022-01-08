import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })


import Blog from "./Containers/Blog"
import About from "./Containers/About"
import BlogPost from "./Containers/BlogPost";
import Experience from "./Containers/Experience";

// var createBrowserHistory = require("history").createBrowserHistory;
// const history = createBrowserHistory();

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route exact path={["/blog/:category?/:page_number?"]} component={Blog} />
        {/* <Route exact path="/about" component = {About} /> */}
        <Route exact path="/experience" component = {Experience} />
        <Route exact path="/post/:title/:issueNumber" component={BlogPost}/>
        
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
