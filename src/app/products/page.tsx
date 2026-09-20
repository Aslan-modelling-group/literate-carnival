import {getProducts} from '@/lib/data'; import {ProductGrid} from '@/components/ProductGrid';
export default async function Products(){return <main className="section"><div className="wrap"><div className="head"><div><span className="kicker">COLLECTION</span><h1>المنتجات</h1></div><span className="muted">اطلب القطعة المخصصة</span></div><ProductGrid products={await getProducts()}/></div></main>}
