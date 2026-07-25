import Button from "../components/button.tsx";
import InfoCard from "../components/info-card.tsx";
import ProductCard from "../components/product-card.tsx";

export default function HomePage() {
    return <>
        <section className='relative self-center bg-black rounded-4xl aspect-18/9 w-full'>
            <div className='absolute top-0 left-12 h-full w-1/2 flex flex-col gap-2 justify-center items-start'>
                <p className='text-white'>DashBar & DashPod | Wireless Gauges</p>
                <h1 className='text-white text-4xl font-semibold'>Introducing The Dash Product Line. <span
                    className='text-brand-primary'>Zero Wires. Zero Lag.</span></h1>
                <Button className='mt-6' type='secondary-white' text='Shop Dash Devices' icon='east'/>
            </div>
        </section>
        <section className='flex flex-col items-center self-center gap-4 w-2/3 text-center'>
            <p className='text-4xl font-semibold'>Your car's data is complicated to display</p>
            <p className='text-lg'>Gain complete visibility into your vehicle’s performance, exactly the way you want to
                                   see it. No complex wiring, no long troubleshooting.</p>
        </section>
        <section className='flex justify-center'>
            <InfoCard icon='leak_add' title='Entirely Wireless'
                      description="Powered by a rechargeable battery with a 30h+ uptime."/>
            <div className='h-38 self-center bg-gray-200 w-px'/>
            <InfoCard icon='speed' title='Lightning Fast'
                      description="Using BLE to instantly communicate with your car's interface."/>
            <div className='h-38 self-center bg-gray-200 w-px'/>
            <InfoCard icon='directions_car' title='Universal Fit'
                      description='Compatible with virtually any vehicle with an OBD2 port.'/>
        </section>
        <section className='flex flex-col gap-12'>
            <p className='text-4xl font-semibold text-center'>Select the right Dash device for you</p>
            <div className='flex justify-center'>
                <ProductCard product={{
                    name: 'DashBar',
                    image: 'sample',
                    description: 'Sleek rectangular design',
                    size: 2.8,
                    resolution: '340x170',
                    screenType: 'LCD',
                    batteryLife: 30,
                    batteryType: 'LiFePo4',
                    dataFeature: 'Cyclable data views with icons and labels',
                    price: 149.99
                }}/>
                <div className='self-stretch my-4 bg-gray-200 w-px'/>
                <ProductCard product={{
                    name: 'DashPod',
                    image: 'sample',
                    description: 'Traditional round gauge',
                    size: 3.1,
                    resolution: '240x240',
                    screenType: 'LCD',
                    batteryLife: 30,
                    batteryType: 'LiFePo4',
                    dataFeature: 'Cyclable gauge and data views with icons and labels',
                    price: 159.99
                }}/>
            </div>
        </section>
        <section>
            <p className='text-3xl font-semibold text-center'>How to set up your Dash device</p>

        </section>
    </>
}