import '../style/project.css';

function Projects() {
    const techstack = [
        'Python',
        'JavaScript',
        'REACT',
        'MongoDB',
        'Node.JS',
        'Express.JS',
        'Langchain', 
        'Pinecone', 
        'Llama3', 
        'Nomed-embed-Text', 
        'Cloudflare Workers', 
        'AWS Amplify', 
        'ECR', 
        'ECS', 
        'ALB', 
        'Lambda', 
        'Docker',

    ];

    return ( 
        <div className='projects'>
            <div className='RAGProject'>
                <h5> Retrieval Augmented Generation </h5>
                <p> <strong>Retrieval-Augmented Generation (RAG)</strong> is an AI framework that enhances generative models by combining them with a retrieval mechanism, ensuring responses are accurate, up-to-date, and contextually grounded. It involves three key components:</p>
                <p> <strong> Indexing:</strong> A preprocessing step where a knowledge base (e.g., documents, articles, or structured data) is converted into searchable representations. This typically involves creating vector embeddings for the data using an embedding model and storing them in a vector database (e.g., Pinecone, Weaviate). The index enables efficient retrieval of relevant information. </p>
                <p> <strong> Retriever: </strong>This component searches the indexed data to fetch the most relevant information based on the user’s input query. It ensures the system has access to external, factual, and contextually relevant data.</p>
                <p> <strong> Generator: </strong>A generative language model (like GPT) uses the retrieved information to produce coherent, grounded, and conversational responses. By incorporating retrieved data, the generator mitigates hallucinations and improves factual accuracy.</p>
                <div className='RAG-image'> </div>

                <h5> Use Case (Foodie Project): </h5>
                <p> The Foodie Project is a fullstack MERN application designed for food reviews, leveraging large-scale datasets from Yelp and DoorDash. The app features an interactive generative AI chatbot powered by a Retrieval-Augmented Generation (RAG) pipeline optimized with Pinecone, LangChain, and Llama 3, achieving a 92% improvement in response time for accurate information retrieval.</p>
                <h5> Work In Progress: </h5>
                <ul>
                    <li> Optimized RAG pipeline with Pinecone, Langchain, and Llama3 to deliver accurate info retrieval with 92% increase in response time</li>
                    <li> Custom LLM and embedding functions using the adapter pattern to integrate a Cloudflare-hosted API with LangChain chains. </li>
                    <li> Full deployment of LLM and embeddings on Cloudflare, with AWS Amplify hosting the frontend and ECR, ECS, ALB, and AWS Lambda handling the backend.</li>
                    <li> Dockerized architecture to streamline deployment and ensure scalability of the frontend, backend, and generative AI models.</li>
                    <li> Collected and preprocessed large-scale food review datasets from Yelp and DoorDash, storing the processed data in MongoDB for seamless integration with the web frontend and backend.</li>
                    <li> Vectorized comprehensive restaurant datasets as metadata, and hosted the embeddings on Pinecone to enable efficient similarity search and seamless integration with the RAG pipeline.</li>
                </ul>
                <h5> Tech Stacks </h5>
                <div className='techstack'>
                {techstack.map((stack, index) => (
                    <p key={index}>{stack}</p>
                ))}
                </div>
                <p> Note: Github Repo is coming soon</p>
            </div>
        </div>
    );
}

export default Projects;

// Retrieval-Augmented Generation (RAG) is a framework that combines information retrieval with generative AI to produce accurate and contextually rich responses. The RAG model integrates two main components:

// Retriever: This searches a knowledge base, such as a document store, database, or vector database, to fetch relevant information based on the input query. The retriever ensures that the generative model has access to up-to-date and contextually relevant facts.
// Generator: A generative language model (like GPT or other LLMs) uses the retrieved information to craft coherent and meaningful responses. This ensures the generated output is both factually grounded and conversational.
// RAG is particularly useful in applications requiring reliable and explainable AI, such as customer support, document summarization, and knowledge management systems. It enhances the generation process by providing external knowledge, reducing the reliance on the model’s internal, static knowledge base.