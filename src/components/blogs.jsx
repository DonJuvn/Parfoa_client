import React, { useState, useEffect } from "react";
import Blog from "./blog";
import BlogDetail from "./blogDetail";

const Blogs = () => {
   const [blogsData, setBlogsData] = useState([]);
   const [selectedBlog, setSelectedBlog] = useState(null);

   useEffect(() => {
      const fetchedData = [
         {
            id: 1,
            ImagePath: "blog1.svg",
            title: "Для любителей холодных ароматов могут подойти следующие популярные парфюмы",
            description: `Вакансия Senior DS в Поиск Ozon

            У нас питабайты логов событий пользователей и возможности быстро проверять влияние гипотез на продукт, которым пользуются миллионы.
            
            — Стек: Python, Pyspark, ClickHouse, Airflow.
            
            — Задачи: полный цикл DS/ML-задач по улучшению качества алгоритма ранжирования товаров в поисковой выдаче — от исследования до автоматизации пайплайнов, A/B-эксперименты.
            
            — Что важно: опыт работы в DS от 3-х лет, сильный Python, знание теории ML, Hadoop, опыт с Big Data.
            
            — Удалёнка из любой точки.
            
            Чтобы присоединиться к команде, откликайся по ссылке :)`,
         },
         {
            id: 2,
            ImagePath: "blog1.svg",
            title: "Для любителей холодных ароматов могут подойти следующие популярные парфюмы",
            description: `1 жыл бұрын кітап оқуды бастадым, алайда мен бұған дейін 23 жыл бойы 1 кітапты да соңына дейін оқыған емеспін, өзімді бәрін білетін адам сезініп жүріппін.

            Қітап оқымай бәрін білетін адам сезіну- ең сорақысы деуші едім. Кітапты оқыған сайын ешнәрсе білмейтініңді байқайды екенсің.
            
            2024-жылға 20 кітап оқуды мақсат қойдым. Қазір 4 кітапты аяқтауға шақ қалдым. Қазіргі мақсатым қаржылық сауаттылықты терең зерттеу. Ол әрбір 10 нан 9 адамның проблемасы шығар, әсіресе біздің Қазақстанда. Жапонияның қаржылық білімі жайлы ақпараттар іздеп көрсеңіз, бала туылмай жатып оның ата-анасы ақшаны жинауды бастайды, ал үкімет ол үшін жағдай жасайды. Жарайды бұл маңызды емес.`,
         },
      ];

      setBlogsData(fetchedData);
   }, []);

   const openBlogDetail = (blog) => {
      setSelectedBlog(blog);
   };

   const closeBlogDetail = () => {
      setSelectedBlog(null);
   };

   return (
      <div id="blog">
         <div className="container">
            <div className="blogs-div">
               <h1 id="title">Блог</h1>
               <div className="blogs">
                  {blogsData.map((blog) => (
                     <Blog
                        key={blog.id}
                        ImagePath={blog.ImagePath}
                        title={blog.title}
                        onClick={() => openBlogDetail(blog)}
                     />
                  ))}
               </div>
            </div>
         </div>

         {selectedBlog && (
            <BlogDetail blog={selectedBlog} onClose={closeBlogDetail} />
         )}
      </div>
   );
};

export default Blogs;