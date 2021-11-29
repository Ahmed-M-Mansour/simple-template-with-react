import './About.css' ; 
import Category from '../About-category/Category'

const About = ()=>{
    const aboutDetails =  {
        mainrTitle: 'Categories' , 
        categories:[
                {
                    key: 'web' , 
                    title : 'Web Development' , 
                    imgUrl: `http://localhost:3000/images/web.svg`
            } , 
            {
                     key: 'Data' , 
                    title : 'Data Scince' , 
                    imgUrl: `http://localhost:3000/images/data.svg`
            } , 
            {
                     key: 'Marketing' , 
                    title : 'Digital Marketing' , 
                    imgUrl: `http://localhost:3000/images/marketing.svg`
            }
            , 
            {
                     key: 'ML' , 
                    title : 'Machine Learning  ' , 
                    imgUrl: `http://localhost:3000/images/ml.svg`
            }
            , 
            {
                     key: 'ui' , 
                    title : 'UI UX Design' , 
                    imgUrl: `http://localhost:3000/images/Design.svg`
            }
            , 
            {
                     key: 'DevOps' , 
                    title : 'DevOps' , 
                    imgUrl: `http://localhost:3000/images/DevOps.svg`
            }
        ]
    }
    return (
        
        <section id="about">
            <h1> { aboutDetails.mainrTitle } </h1>
            <div className="about-container">
            < Category data={aboutDetails.categories} / > 
            </div>
        </section> 
    )
}

export default About ; 
