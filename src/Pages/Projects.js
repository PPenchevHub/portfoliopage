import React, { useState } from 'react'
import Categories from '../Components/Categories'
import MenuItems from '../Components/MenuItems'
import Title from '../Components/Title'
import projects from '../Components/ProjectsData'

const allCategories=['All', ...new Set(projects.map((item)=>item.category))]

function Projects() {
    const[categories, setCategories] = useState(allCategories)
    const[menuItems, setMenuItems] = useState(projects)

    const filter =(category) =>{
        if(category ==='All'){
            setMenuItems(projects)
            return;
        }
        const filteredData = projects.filter((item)=>{
            return item.category===category
        })
        setMenuItems(filteredData);

    }

    return (
        <div className="ProjectsPage">
            <div className="title">
                <Title title={'Projects'} span={'Projects'}/>
            </div>
            <div className="projects-data">
                <Categories filter={filter} categories={categories}/>
                <MenuItems menuItem={menuItems}/>
            </div>

        </div>
    )
}

export default Projects
