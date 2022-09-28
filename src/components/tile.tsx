
const Title = ({candy, candyId}:{ candy:string, candyId:number}) => {
    return (
        <div    className="h-24 w-24 flex justify-center items-center m-0.5 rounded-lg select-none"
        style={{
            boxShadow: "inset 5px 5px 15px #062525,inset -5px -5px 15px #aaaab7bb",
          }}
        >
            {candy && (
                <img
                src={candy}
                alt="candy"
                className="h-20 w-20"
                draggable={true}
                candy-id={candyId}

                />
            )}
        </div>
    );
};

export default Title;