import React from "react";
import { Box, Button } from "../UI";
import { extractList } from "../../info";
import Items from "../Items";

const Extract = () => {
    return (<Box>
        {
            extractList.updates.map(({ id, type, from, value, date }) => {
                return (
                    <Items key={id} type={type} from={from} value={value} date={date}>
                    </Items>
                )
            })
        }
        <Button>More</Button>
    </Box>
    );
};

export default Extract;