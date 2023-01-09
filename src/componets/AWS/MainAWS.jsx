import {SaveGraph} from "./SaveGraph";
import {DeleteGraph} from "./DeleteGraph";
import {InfoAboutCrypto} from "../Symbols/InfoAboutCrypto";

export const MainAWS = () => {
    return (
        <div>
            {/*<AddBucket />*/}
            <InfoAboutCrypto />
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <SaveGraph />
                <DeleteGraph />
            </div>
        </div>
    )
}