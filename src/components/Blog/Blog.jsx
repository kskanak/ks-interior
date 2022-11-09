import React from "react";
import useTitle from "../../useTitle/UseTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Blog
          </h2>
          <div className="divide-y divide-gray-700">
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                Difference between SQL and NoSQL?
              </h3>
              <p className="md:pl-0 md:col-span-7 text-justify">
                SQL databases are vertically scalable, while NoSQL databases are
                horizontally scalable. SQL databases are table-based, while
                NoSQL databases are document, key-value, graph, or wide-column
                stores. SQL databases are better for multi-row transactions,
                while NoSQL is better for unstructured data like documents or
                JSON..
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                What is JWT, and how does it work??
              </h3>
              <p className="md:pl-0 md:col-span-7 text-justify">
                JSON Web Token (JWT) is an open standard (RFC 7519) for securely
                transmitting information between parties as JSON
                object.Basically the identity provider(IdP) generates a JWT
                certifying user identity and Resource server decodes and
                verifies the authenticity of the token using secret salt /
                public key.User sign-in using username and password or
                google/facebook. Authentication server verifies the credentials
                and issues a jwt signed using either a secret salt or a private
                key. User's Client uses the JWT to access protected resources by
                passing the JWT in HTTP Authorization header. Resource server
                then verifies the authenticity of the token using the secret
                salt/ public key.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                What is the difference between javascript and NodeJS?
              </h3>
              <p className="md:pl-0 md:col-span-7 text-justify">
                Javascript is a Scripting language. It is mostly abbreviated as
                JS. It can be said that Javascript is the updated version of the
                ECMA script. Javascript is a high-level programming language
                that uses the concept of Oops but it is based on prototype
                inheritance.NodeJS is a cross-platform and opensource Javascript
                runtime environment that allows the javascript to be run on the
                server-side. Nodejs allows Javascript code to run outside the
                browser. Nodejs comes with a lot of modules and mostly used in
                web development.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                How does NodeJS handle multiple requests at the same time??
              </h3>
              <p className="md:pl-0 md:col-span-7 text-justify">
                NodeJS receives multiple client requests and places them into
                EventQueue. NodeJS is built with the concept of event-driven
                architecture. NodeJS has its own EventLoop which is an infinite
                loop that receives requests and processes them. EventLoop is the
                listener for the EventQueue. If NodeJS can process the request
                without I/O blocking then the event loop would itself process
                the request and sends the response back to the client by itself.
                But, it is possible to process multiple requests parallelly
                using the NodeJS cluster module or worker_threads module.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
