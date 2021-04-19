import React, { useState } from 'react'
import Categories from '../Components/Categories'
import MenuItems from '../Components/MenuItems'
import Title from '../Components/Title'
import projects from '../Components/ProjectsData'

function Projects() {
    const[categories, setCategories] = useState(null)
    const[menuItems, setMenuItems] = useState(projects)
    return (
        <div className="ProjectsPage">
            <div className="title">
                <Title title={'Projects'} span={'Projects'}/>
            </div>
            <div className="projects-data">
                <Categories/>
                <MenuItems menuItem={menuItems}/>
            </div>

        </div>
    )
}

export default Projects
