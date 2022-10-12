import React from "react";

const Blog = () => {
  return (
    <div className="bg-slate-800 min-h-screen p-6 md:p-12 ">
      <div className="mx-auto max-w-6xl px-2  md:px-5 ">
        <div className="bg-slate-700 p-6 rounded">
          <h2 className="text-white text-3xl font-semibold mb-4">
            What is purpose of react router?
          </h2>
          <p className="text-white text-xl">
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL. React Router helps us to built Single Page
            Application.It is very easy to manage the "route" in one's React
            state. One needs that state anyway, so one might as well add the
            extra info. What remains true is that routing protects against
            navigation outside the app (F5, back button etc.), and it can help
            bookmarking special views of the app
          </p>
        </div>
        <div className="bg-slate-700 p-6 rounded my-8">
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
            How does Context Api works?
          </h2>
          <p className="text-white text-xl">
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux. It returns a
            consumer and a provider. Provider is a component that as it's names
            suggests provides the state to its children. It will hold the
            "store" and be the parent of all the components that might need that
            store. Consumer as it so happens is a component that consumes and
            uses the state.
          </p>
        </div>
        <div className="bg-slate-700 p-6 rounded">
          <h2 className="text-white text-3xl font-semibold mb-4">
            What is UseRef() Hook?
          </h2>
          <p className="text-white text-xl">
            The useRef hook is the new addition in React 16.8. The useRef is a
            hook that allows to directly create a reference to the DOM element
            in the functional component.The useRef returns a mutable ref object.
            This object has a property called .current. The value is persisted
            in the refContainer.current property. These values are accessed from
            the current property of the returned object. The .current property
            could be initialised to the passed argument initialValue e.g.
            useRef(initialValue). The object can persist a value for a full
            lifetime of the component.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
