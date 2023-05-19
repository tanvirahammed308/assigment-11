

const Blogs = () => {
    return (
        <div className="container mx-auto lg:mt-16 sm:mt-40">
            <div className="drop-shadow-lg border-solid border-2 border-indigo-600 p-10">
                <p className="font-bold text-2xl">1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                <p className="mt-5 text-xl">Ans.The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.A refresh token just helps  re-validate a user without them having to re-enter their login credentials multiple times.Access token and refresh token should not be stored in the local/session storage, because they are not a place for any sensitive data.it should be stored  in a httpOnly</p>
            </div>
            <div className="drop-shadow-lg border-solid border-2 border-indigo-600 p-10 mt-10">
                <p className="font-bold text-2xl">2.Compare SQL and NoSQL databases?</p>
                <p className="mt-5 text-xl">Ans.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
            </div>
            <div className="drop-shadow-lg border-solid border-2 border-indigo-600 p-10 mt-10">
                <p className="font-bold text-2xl" >3.What is express js? What is Nest JS?</p>
                <p className="mt-5 text-xl">Ans.Express.js is a free and open-source web application framework for Node.js. .NestJS is a framework for developing modern server-side applications in Node. js. </p>
            </div>
            <div className="drop-shadow-lg border-solid border-2 border-indigo-600 p-10 mt-10">
                <p className="font-bold text-2xl" >4.What is MongoDB aggregate and how does it work?</p>
                <p className="mt-5 text-xl">Ans. Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline. </p>
            </div>

        </div>
    );
};

export default Blogs;