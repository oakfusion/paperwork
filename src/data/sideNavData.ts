import lightningBolt from "@iconify-icons/radix-icons/lightning-bolt"
import bellIcon from "@iconify-icons/akar-icons/bell"
import suitcaseSimple from "@iconify-icons/ph/suitcase-simple"
import documentBlank from "@iconify-icons/carbon/document-blank"
import people16Regular from "@iconify-icons/fluent/people-16-regular"
import squaresFourLight from "@iconify-icons/ph/squares-four-light"

const sideNavData = [
  {
    id: 1,
    icon: lightningBolt,
    name: "Active contracts",
    slug: "/contracts/active",
  },
  {
    id: 2,
    icon: bellIcon,
    name: "Pending contracts",
    slug: "/contracts/pending",
  },
  {
    id: 3,
    icon: suitcaseSimple,
    name: "Past contracts",
    slug: "/contracts/finished",
  },
  {
    id: 4,
    icon: documentBlank,
    name: "Contracts templates",
    slug: "/",
  },
  {
    id: 5,
    icon: people16Regular,
    name: "Vendors",
    slug: "/vendors",
  },
  {
    id: 6,
    icon: squaresFourLight,
    name: "Projects",
    slug: "/projects",
  },
]
export default sideNavData
