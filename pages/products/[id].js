import utilStyle from '../../styles/utils.module.css'

export async function getStaticPaths() {
  return {
    paths: [{
      params: {
        id: '1'
      }
    }, {
      params: {
        id: '2'
      }
    }],
    fallback: true
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  return {
    props: {
      id
    }
  }
}

export default function Product({ id }) {
  return (
    <h1 className={utilStyle.headingMd}>Product id: {id}</h1>
  )
}
