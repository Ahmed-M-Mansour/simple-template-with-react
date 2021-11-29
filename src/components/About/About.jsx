import './About.css' ; 
import Category from '../About-category/Category'

const About = ()=>{
    const aboutDetails =  {
        mainrTitle: 'Categories' , 
        categories:[
                {
                    key: 'web' , 
                    title : 'Web Development' , 
                    imgUrl: `./images/web.svg`
            } , 
            {
                     key: 'Data' , 
                    title : 'Data Scince' , 
                    imgUrl: `./images/data.svg`
            } , 
            {
                     key: 'Marketing' , 
                    title : 'Digital Marketing' , 
                    imgUrl: `./images/marketing.svg`
            }
            , 
            {
                     key: 'ML' , 
                    title : 'Machine Learning  ' , 
                    imgUrl: `./images/ml.svg`
            }
            , 
            {
                     key: 'ui' , 
                    title : 'UI UX Design' , 
                    imgUrl: `./images/Design.svg`
            }
            , 
            {
                     key: 'DevOps' , 
                    title : 'DevOps' , 
                    imgUrl: `./images/DevOps.svg`
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
