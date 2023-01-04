import { useState } from "react";

function StatesBasic() {
    const [count, setCount] = useState(0);

    const Increment = () => {
        return setCount(count + 1);
    }

    return (
      <div>
        <button onClick={Increment} type="">
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} type="">
          Decrement
        </button>
        <button onClick={() => setCount(0)} type="">
          Set To Zero
        </button>
        {count}
      </div>
    );
}

export default StatesBasic