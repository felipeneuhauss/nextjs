import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import moment from 'moment'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className="text-gray-500 font-medium">Well-qualified Full Stack Developer familiar with a wide range of programming utilities and languages. {' '}
        Knowledgeable of backend and frontend development requirements. Able to handle any part of the process with ease. {' '}
        Collaborative team player with excellent technical abilities offering 12 years of related experience. {' '}
        Knowledgeable Front End Developer adept at creating successful websites or apps that meet customer needs. {' '}
        Specialising in collaborating with entrepreneurs customers to gather requirements, produce plans and improve {' '}
        designs for usability and functionality. Very proficient in VueJS, ReactJS, AngularJS, HTML, CSS, NodeJS, {' '}
        PHP, AWS and Google Cloud Platform. </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}><a>{title}</a></Link>
              <br />
              {id}
              <br />
              {moment(date).format('DD/MM/YYYY')}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
