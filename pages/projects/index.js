import SingleColumnLayout from "../../components/layouts/SingleColumnLayout";
import {connectToDatabase} from "../../lib/dbConnect";
import {ObjectId} from "mongodb";
import Heading from "../../components/headings/Heading";
import ProjectsTable from "../../components/ProjectsTable";

const orgURL = "61bf60ecddd910d9c0a18df1"

function Index({projects}) {
    return (
        <SingleColumnLayout>
            <Heading label={"Projects"}/>
            <ProjectsTable projects={projects}/>
        </SingleColumnLayout>
    );
}

export default Index;

export async function getServerSideProps({req}) {

    const {db} = await connectToDatabase()
    const projects = await db
        .collection("projects")
        .find({"organization": ObjectId(orgURL)})
        .toArray()

    const employees = await db
        .collection("employees")
        .find({"projects": ObjectId(orgURL)})
        .toArray()

    const returnProjects = JSON.stringify(projects)

    return {
        props: {
            projects: JSON.parse(returnProjects),
        }
    }
}
