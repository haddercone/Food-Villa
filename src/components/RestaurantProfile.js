import { IMAGE_CDN_URL } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faStar,
	faStopwatch,
	faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

const RestaurantProfile = (
    {
        name,   
        cloudinaryImageId,
        cuisines,
        locality,
        avgRatingString,
        costForTwoMessage,
        sla,
        aggregatedDiscountInfo,
        

    }
    ) => {
    return (
        <>
            <div className="bg-[#3C4852] text-white py-8 mb-5">
				<div className="m-auto w-4/5 md:flex justify-evenly items-center gap-5">
					<div>
						<img
							className="md:w-96"
							src={IMAGE_CDN_URL + cloudinaryImageId}
						/>
					</div>

					<div className="md:w-1/3 ">
						<div className="text-3xl pb-2 mt-2 md:mt-0">{name}</div>
						<div className="text-xl pb-2">{cuisines.join(",")}</div>
						<div className="pb-2">{locality}</div>
						<div className="flex gap-2 justify-between  md:flex-row   md:justify-start text-xl mb-2 md:mb-0">
							<div className="p-2">
								<FontAwesomeIcon icon={faStar} /> {avgRatingString}
							</div>
							<div className="p-2">
								{" "}
								<FontAwesomeIcon icon={faStopwatch} /> {sla?.slaString}
							</div>
							<div className=" p-2">
								<FontAwesomeIcon icon={faMoneyBill} /> {costForTwoMessage}
							</div>
						</div>
					</div>

					<div className="border-2 border-white md:p-5 p-2 border-dashed md:border-solid text-xl relative bg-gray-900 sm:bg-[#3C4852] ">
						<p className="md:absolute top-[-24px] md:p-2 md:translate-x-[-10px] bg-gray-900  sm:bg-[#3C4852]">
							Offers :{" "}
						</p>
						<p>{aggregatedDiscountInfo?.descriptionList[0].meta} </p>
						<p>{aggregatedDiscountInfo?.descriptionList[1].meta} </p>
					</div>
				</div>
			</div>
            </>
    )
}
export default RestaurantProfile;