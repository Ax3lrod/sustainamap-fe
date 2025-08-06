import Typography from "../Typography";

export default function Toggle () {
    return (
        <div className="bg-secondary w-56 space-y-10 h-fit px-10 absolute top-64 z-10 right-0">
            <button className="bg-secondary px-4 rounded-full border-1 border-primary-600">
                <Typography variant="bs" font="body">
                    Kualitas Udara
                </Typography>
            </button>
             <button className="bg-secondary px-4 rounded-full border-1 border-primary-600">
                <Typography variant="bs" font="body">
                    Kualitas Udara
                </Typography>
            </button>
            <button className="bg-secondary px-4 rounded-full border-1 border-primary-600">
                <Typography variant="bs" font="body">
                    Kualitas Udara
                </Typography>
            </button>
        </div>
    )
}