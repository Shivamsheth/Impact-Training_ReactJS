const h1 = React.createElement("h1", {}, "Hi, how are you?");
        const h2 = React.createElement("h2", {}, "Hi, how are ?");
        const h3 = React.createElement("h3", {}, "Hi, how  you?");
        const h4 = React.createElement("h4", {}, "Hi,  are you?");
        const h5 = React.createElement("h5", {}, "Hi, how are ");
        const h6 = React.createElement("h6", {}, ", how are you?");

        const img = React.createElement("img", { src: "./logo.png ", height: "300px", width: "300px" });
        const tbl = React.createElement(
            "table",
            { border: "1px" },
            React.createElement("tbody", {},
                React.createElement("tr", {},
                    React.createElement("td", {}, "Column - 1"),
                    React.createElement("td", {}, "Column - 2"),
                    React.createElement("td", {}, "Column - 3 ")
                ),
                React.createElement("tr", {},
                    React.createElement("td", {}, "R2 - c1"),
                    React.createElement("td", {}, "R2 - C2"),
                    React.createElement("td", {}, "R2 - C3 ")
                ),

            )
        );
        const form = React.createElement("form", {},
            React.createElement("label", {}, "Enter Name",
                React.createElement("input", { type: "text" },)
            ),
            React.createElement("label", {}, "Enter Name",
                React.createElement("input", { type: "text" },)
            ),
            React.createElement("label", {}, "Enter Name",
                React.createElement("textarea", {},)
            )
        );



        const container = React.createElement("div", {}, [h1, h2, h3, h4, h5, h6], img, tbl, form);

        const targetDiv = document.getElementById("root");
        const root = ReactDOM.createRoot(targetDiv);
        root.render(container);