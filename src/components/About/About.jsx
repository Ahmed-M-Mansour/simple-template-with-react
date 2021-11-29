import Category from '../About-category/Category'
import './About.css' ; 



const About = ()=>{
    const aboutDetails =  {
        mainrTitle: 'Categories' , 
        categories:[
                {
                    key: 'web' , 
                    title : 'Web Development' , 
                    imgUrl: `./images/web.svg` , 
                    url: 'web'
            } , 
            {
                     key: 'Data' , 
                    title : 'Data Scince' , 
                    imgUrl: `./images/data.svg`
                    , 
                    url: 'web'
            } , 
            {
                     key: 'Marketing' , 
                    title : 'Digital Marketing' , 
                    imgUrl: `./images/marketing.svg`, 
                    url: 'web'
            }
            , 
            {
                     key: 'ML' , 
                    title : 'Machine Learning  ' , 
                    imgUrl: `./images/ml.svg`, 
                    url: 'web'
            }
            , 
            {
                     key: 'ui' , 
                    title : 'UI UX Design' , 
                    imgUrl: `./images/Design.svg`, 
                    url: 'web'
            }
            , 
            {
                     key: 'DevOps' , 
                    title : 'DevOps' , 
                    imgUrl: `./images/DevOps.svg`, 
                    url: 'web'
            }
        ]
    }

    console.log(aboutDetails.categories[0].url)
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
