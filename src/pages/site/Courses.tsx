import Label from "@/assets/components/site/courses/Label";
import CoursesList from "@/assets/components/site/courses/coursesList/CoursesList";
import DesktopSort from "@/assets/components/site/courses/desktopSort/DesktopSort";
import MobileSortOptions from "@/assets/components/site/courses/mobileSortOptions/MobileSortOptions";
import MobileSort from "@/assets/components/site/courses/mobileSort/MobileSort";
import MobileFilterOptions from "@/assets/components/site/courses/mobileFilterOptions/MobileFilterOptions";
import Sidebar from "@/assets/components/site/courses/sidebar/Sidebar";
import { memo } from "react";
import { CoursesContextProvider } from "@/assets/contexts/site/courses.context";
import { CoursesSortContextProvider } from "@/assets/contexts/site/coursesSort.context";
import { CoursesSortMenuContextProvider } from "@/assets/contexts/site/coursesSortMenuContext";

const Courses = memo(() => {
  return (
    <main
      id="courses"
      className="max-w-[1920px] mx-auto overflow-x-hidden mt-8 sm:mt-10"
    >
      <CoursesSortContextProvider>
        <CoursesContextProvider>
          <CoursesSortMenuContextProvider>
            <div className="container">
              <Label />

              <div className="grid grid-cols-12 gap-y-5 md:gap-x-7">
                <Sidebar />
                <section className="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
                  <MobileSort />
                  <DesktopSort />
                  <CoursesList />
                </section>
              </div>
            </div>
            <MobileSortOptions/>
            <MobileFilterOptions />
          </CoursesSortMenuContextProvider>
        </CoursesContextProvider>
      </CoursesSortContextProvider>
    </main>
  );
});

export default Courses;
