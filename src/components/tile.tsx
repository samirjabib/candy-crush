import { useAppDispatch } from "../hooks/use-app-dispatch";
import { dragDrop, dragEnd, dragStart } from "../store/slices/candy-crush/candy-crush.slice";

const Title = ({candy, candyId}:{ candy:string, candyId:number}) => {

    const dispatch = useAppDispatch();


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
                onDragStart={(e) => dispatch(dragStart(e.target))}
                onDragOver={(e) => e.preventDefault()}
                onDragEnter={(e) => e.preventDefault()}
                onDragLeave={(e) => e.preventDefault()}
                onDrop={(e) => dispatch(dragDrop(e.target))}
                onDragEnd={() => dispatch(dragEnd())}
                />
            )}
        </div>
    );
};

export default Title;
