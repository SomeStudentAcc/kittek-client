import React, { Suspense } from "react";
import FiltersContainer from "./FiltersContainer";

export default function FiltersPage() {
  return (
    <Suspense fallback={<div>Loading filters...</div>}>
      <FiltersContainer />
    </Suspense>
  );
}
