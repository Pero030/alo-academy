import {
    db,
    doc,
    getDoc
} from "./firebase.js";

const currentPage =
    document.body.dataset.page;

async function checkMaintenance() {

    try {

        const globalRef =
            doc(
                db,
                "maintenance",
                "global"
            );

        const globalSnap =
            await getDoc(
                globalRef
            );

        if (
            globalSnap.exists() &&
            globalSnap.data().enabled
        ) {

            openMaintenance(
                globalSnap.data()
            );

            return;
        }

        if (!currentPage) {
            return;
        }

        const pageRef =
            doc(
                db,
                "maintenance",
                currentPage
            );

        const pageSnap =
            await getDoc(
                pageRef
            );

        if (
            pageSnap.exists() &&
            pageSnap.data().enabled
        ) {

            openMaintenance(
                pageSnap.data()
            );
        }

    } catch (error) {

        console.error(
            "Maintenance Fehler:",
            error
        );
    }
}

function openMaintenance(data) {

    sessionStorage.setItem(
        "maintenanceData",
        JSON.stringify(data)
    );

    window.location.href =
        "../Wartung/";
}

checkMaintenance();
