import { useState } from "react";

import * as C from "./Accordion.style";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

import { Data } from "../../data/data";

export const Accordion = () => {
  const [click, setClick] = useState<any>(false);

  const toggle = (index: any) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };

  return (
    <div>
      <IconContext.Provider value={{ color: "black", size: "25px" }}>
        <C.AccordionSection>
          <C.Container>
            {Data.map((item: any, index: any) => {
              return (
                <>
                  <C.Wrap onClick={() => toggle(index)} key={index}>
                    <h1>{item.title}</h1>
                    <span>{click === index ? <FiMinus /> : <FiPlus />}</span>
                  </C.Wrap>

                  {click === index ? (
                    <C.Dropdown>
                      <p>{item.opening_crawl}</p>
                    </C.Dropdown>
                  ) : null}
                </>
              );
            })}
          </C.Container>
        </C.AccordionSection>
        ;
      </IconContext.Provider>
      {/* <Button /> */}
    </div>
  );
};
