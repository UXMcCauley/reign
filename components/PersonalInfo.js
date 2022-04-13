import Image from "next/image";
import Badges from "./Badges";

function PersonalInfo({data}) {
    return (
        <div className={'w-1/2'}>
            <div className={"uppercase text-black text-2xl flex align-middle"}>
                <Image width={50} height={50} src={data.avatar} className={"rounded-full inline-block"}
                       alt={"user avatar"}/>
                <div className={"self-center ml-3 "}>{data.firstName} {data.lastName}</div>
            </div>
            <div className={"flex justify-between text-xs ml-16"}>
                <div>
                    <div className={"text-gray-500 mb-3"}>
                        Phone: <p className={"text-black font-light"}>{data.cell}</p>
                    </div>
                    <div className={"text-gray-500 mb-3"}>
                        Email: <p className={"text-black font-light"}>{data.email}</p>
                    </div>
                    <div className={"text-gray-500"}>
                        Address: <p
                        className={"font-light text-black"}>{data.street} {data.city}, {data.state} {data.zipCode}</p>
                    </div>
                </div>
            </div>
            <Badges/>
        </div>
    );
}

export default PersonalInfo;
