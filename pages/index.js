import TwoColumnRightMenu from "../components/layouts/TwoColumnRightMenu";
import Heading from "../components/headings/Heading";
import TailWindPreviewCards from "../components/TailWindPreviewCards";

export default function Index(){
    return (
        <TwoColumnRightMenu>
            <Heading label={"Dashboards"}/>
            <TailWindPreviewCards/>
        </TwoColumnRightMenu>
    )
}
