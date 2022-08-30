import GenresInDb from "./genres/GenresInDb";
import LastMovie from "./LastMovie";
import MiniCard from "./MiniCard";

const miniCards = [
    {
        id: "5",
        title: "Movies in Database",
        value: "25",
        icon: "fa-film",
    },
    {
        id: "24",
        title: "Total awards",
        color: "success",
        value: "79",
        icon: "fa-award",
    },
    {
        id: "32",
        title: "Actors quantity",
        color: "warning",
        value: "49",
        icon: "fa-user",
    },
];

export default function Dashboard() {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            {/* <!-- Content Row Movies--> */}
            <div className="row">
                {/* <!-- Movies in Data Base --> */}
                {miniCards.map((data) => {
                    return <MiniCard {...data} key={data.id} />;
                })}
            </div>
            {/* <!-- End movies in Data Base --> */}

            {/* <!-- Content Row Last Movie in Data Base --> */}
            <div className="row">
                {/* <!-- Last Movie in DB --> */}
                <LastMovie />
                {/* <!-- End content row last movie in Data Base --> */}

                {/* <!-- Genres in DB --> */}
                <GenresInDb />
            </div>
        </>
    );
}
