import React, { useState } from 'react'
import styles from './Category.module.css'
import { NavLink } from 'react-router-dom'
function Category({ setCategoryName,  activeCategory }) {
    const categoryList = [
        {
            name: 'all'
        },
        {
            name: 'gaming'
        },
        {
            name: 'music'
        },
        {
            name: 'movie'
        },
        {
            name: 'live'
        },
        {
            name: 'mixes'
        },
        {
            name: 'react'
        },
        {
            name: 'stock'
        },
    ]
    console.log({ activeCategory });
    return (
        <div className={styles.category}>
            {/* <NavLink
                className={(state) => state.isActive ? styles.active : null}
                // className={styles.categoryList}
                //  activeclassname={styles.active}
                to='/'>
                <p>all</p>
            </NavLink>
            <NavLink
                className={(state) => state.isActive ? styles.active : null}
                //  className={styles.categoryList}
                //   activeclassname={styles.active}
                to='/gaming'>
                <p>gaming</p>
            </NavLink>
            <NavLink className={styles.categoryList} activeclassname={styles.active} to='/react'>
                <p>react</p>
            </NavLink> */}

            {categoryList.map((item, index) => (
                <div key={index} className={styles.categoryList}>
                    <p className={item.name === activeCategory ? styles.active : styles.notActive}
                        // style={{
                        //     background: item.name === activeCategory && 'grey',
                        //     color: item.name === activeCategory && 'white'
                        // }}
                        onClick={() => setCategoryName(item.name)}>{item.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Category