import Button from "./button.tsx";

type Product = {
    name: string;
    image: string;
    description: string;
    size: number;
    resolution: string;
    screenType: string;
    batteryLife: number;
    batteryType: string;
    dataFeature: string;
    price: number;
}

export default function ProductCard({product}: { product: Product }) {
    return <div className='flex flex-col max-w-94 px-18 items-center text-center gap-8'>
        <p className='text-xl font-semibold'>{product.name}</p>
        <div className='flex flex-col gap-2'>
            <img src={product.image} alt={product.name}/>
            <p>{product.description}</p>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-2xl font-semibold'>{product.size}"</p>
            <p>{product.resolution}px resolution</p>
            <p>{product.screenType} display</p>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='material-symbols-rounded text-3xl! font-bold!'>battery_android_frame_6</span>
            <p>{product.batteryLife}h+ uptime after full charge</p>
            <p>Heat-safe, rechargeable {product.batteryType} battery</p>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='material-symbols-rounded text-3xl! font-bold!'>farsight_digital</span>
            <p>{product.dataFeature}</p>
        </div>
        <div className='flex flex-col gap-4'>
            <p className='text-2xl'>${product.price}</p>
            <Button type={"primary"} text={`Buy ${product.name}`}/>
        </div>
    </div>
}