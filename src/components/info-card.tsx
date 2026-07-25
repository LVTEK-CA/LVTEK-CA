type InfoCardProps = { icon: string, title: string, description?: string };

export default function InfoCard({icon, title, description}: InfoCardProps) {
    return <div className='flex flex-col items-center text-center w-2/7 gap-4 px-12'>
        <span className='material-symbols-rounded text-brand-primary text-6xl!'>{icon}</span>
        <p className='text-xl font-semibold'>{title}</p>
        {description && <p className='self-start'>{description}</p>}
    </div>
}