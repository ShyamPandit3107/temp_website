import { useIqacDetails } from "@/api/api-hooks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Content from "@/components/ui/content";
import Heading from "@/components/ui/heading";
import { imageShowUrl } from "@/lib/BaseUrl";
import { useStore } from "@/store";
import Image from "next/image";
import React from "react";

const Ipp = () => {
  const qcid = useStore((state) => state.qid);
  const { data: naacDetails } = useIqacDetails({
    id: qcid,
    page: 1,
    limit: 1000,
    flow: "NAAC",
    type: "NAAC_IIP",
    search: "",
  });
  return (
    <div>
      <Heading>Policy</Heading>
      {naacDetails?.all_com?.map((item: any) => (
        <Card className="bg-background shadow-none" key={item._id}>
          <CardHeader>
            <CardTitle className="underline text-xl text-primary font-semibold">
              {item?.sub_head_title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-4">
              <div className="sm:w-4/5 w-full">
                {item?.sub_head_body && (
                  <Content>{item?.sub_head_body}</Content>
                )}
              </div>
              <div className="sm:w-1/5 w-full flex flex-col items-center justify-center text-center">
                <Image
                  src={`${imageShowUrl}/${item?.sub_heading_image}`}
                  alt="founder image"
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Ipp;
