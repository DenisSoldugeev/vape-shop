type Props = {
    params: {
        id: string
    }
}

export const generateMetadata = async ({params: {id}}: Props) => {
    return {
        title: id
    }
};

export default function Page({params: { id }}: Props) {
    return (
        <h1>Product Page {id}</h1>
    )
}
