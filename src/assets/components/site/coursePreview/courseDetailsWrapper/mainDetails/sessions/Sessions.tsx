import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { CourseContext } from "@/assets/contexts/site/course.context";
import { memo, useContext, useState } from "react";
import Session from "./Session";
import DangerAlert from "@/assets/components/elems/DangerAlert";

const Sessions = memo(() => {
  const course = useContext(CourseContext);
  const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));

  return course?.sessions?.length ? (
    <Accordion 
      variant="splitted"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys as any}      
    >
      <AccordionItem 
        key="1" 
        aria-label="Accordion 1" 
        className="bg-transparent  border border-gray-300 dark:border-gray-500 shadow-lg" 
        title={
          <p>
            <span className="sm:text-xl text-sm  font-semibold sm:pl-7 pl-2 sm:ml-5 ml-2 border-l dark:border-opacity-30 border-gray-200 inline-block">جلسات</span>
            <span className="sm:text-xl text-sm inline-block">{course.sessions.length} جلسه</span>
          </p>
        }
      >
        {
          course.sessions.map((session, index) => <Session key={session._id} number={index + 1} {...session}/>)
        }
      </AccordionItem>      
    </Accordion>
  ) : (
    <DangerAlert text="فعلا جلسه ای آپلود نشده است ..."/>
    
  );
});

export default Sessions;
