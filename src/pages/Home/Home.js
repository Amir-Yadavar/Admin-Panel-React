import React from 'react'
import './Home.css'
import './HomeLocal.css'
import Feature from '../../components/feature/Feature'
import ChartsHome from '../../components/Charts/ChartsHome'
import { dataChart } from '../../dataChart'
import ArticleLeft from '../../components/articleHome/articleLeft/ArticleLeft'
import ArticleRight from '../../components/articleHome/articleRight/ArticleRight'

export default function Home() {
    return (
        <section className='container-home'>
            <Feature />
            <ChartsHome grid title="Month Sale" data={dataChart} dataKey="sale" />
            <section className='article-home'>
                <ArticleLeft />
                <ArticleRight/>
            </section>
        </section>
    )
}
