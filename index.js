// Create a server object
const server = http.createServer((req, res) => {
    // Set the response HTTP header with Content-Type: application/json
    res.setHeader('Content-Type', 'application/json');
  
    // Define the JSON data to be sent
    const jsonData = {
        "status": "success",
        "message": "Get voucher",
        "result": [
            {
                "id": 35,
                "name": "Citrix Assessment Retake Voucher",
                "voucher_category_id": 1,
                "voucher_child_category_id": 33,
                "slug": "citrix-certification-assessment-voucher",
                "title": "Citrix Certification Assessment Retake Voucher",
                "logo": "vicon-158693033112.png",
                "logo_alt_tag": "citrix-certification-assessment-voucher-img",
                "overview_heading": "About Citrix Certification Retake Voucher",
                "overview": "<p><strong>Valid for Below Assessments:</strong></p>\r\n<p>Exam Code: 1Y0-101<br>Exam Name: &nbsp;Understanding Citrix ShareFile<br>Certification: CC-SHAREFILE</p>\r\n<p>Exam Code: 1Y0-130<br>Exam Name: Citrix Virtual Apps and Desktops Service on Citrix Cloud<br>Certification: CC-VAD-CC</p>\r\n<p>Exam Code: 1Y0-150<br>Exam Name: Citrix Virtual Apps and Desktops Service Integration with Microsoft Azure<br>Certification: CC-VAD-MA</p>\r\n<p>Exam Code: 1Y0-141<br>Exam Name: Understanding Citrix SD-WAN<br>Certification: CC-SDWAN</p>\r\n<p>Exam Code: 1Y0-120<br>Exam Name: Administering Citrix XenServer<br>Certification: CC-XenServer</p>\r\n<p>Exam Code: 1Y0-170<br>Exam Name: Managing Citrix Endpoint Management<br>Certification: CC-CEM&nbsp;</p>",
                "recommended_knowledge_heading": "How to Redeem Your Voucher Code",
                "recommended_knowledge": "<ul>\r\n<li>Log in to our training website with your Citrix account.</li>\r\n<li>Go to the certification assessment page of which you want to attempt.</li>\r\n<li>Select &ldquo;Purchase an Attempt&rdquo; and then &ldquo;Continue to Checkout.&rdquo; Note: If you have at least 1 attempts available, you will not be able to add an attempt with your voucher code.</li>\r\n<li>Input the voucher code (listed above) in the field below the cart&rsquo;s total cost.</li>\r\n<li>Select &ldquo;Apply/Redeem Voucher&rdquo;</li>\r\n<li>Then, select &ldquo;Proceed to Checkout&rdquo;</li>\r\n<li>After you successfully check out your cart, one (1) additional attempt will appear on the certification assessment&rsquo;s page.</li>\r\n</ul>",
                "exam_preparation_heading": "Terms & Conditions",
                "exam_preparation": "<ul>\r\n<li>If your order included vouchers for more than one product, you will receive separate emails for each product.</li>\r\n<li>The voucher code in this order may be used once and is not transferrable to other products.</li>\r\n<li>Once the voucher expires, the certification assessment attempt become invalid.</li>\r\n<li>Expiration dates are subject to change depending on course and promotion availability. Citrix reserves the right to modify voucher expiration dates.</li>\r\n<li>All Citrix Education sales are final. No refunds will be issued.</li>\r\n</ul>",
                "exam_overview_heading": "Support for Your Order",
                "exam_overview": "<ul>\r\n<li>For questions regarding your order, please visit Citrix Education Support at training.citrix.com/support.</li>\r\n<li>Citrix Education offers a robust training curriculum designed to enhance and validate Citrix product knowledge and expertise. For more information on our courses, exams and certification programs, please visit training.citrix.com.</li>\r\n</ul>",
                "description": null,
                "faq": null,
                "related_voucher": null,
                "related_assessment": "[{\"label\": \"Citrix CC-DaaS-CC 1Y0-130 Exam Preparation Kit\", \"level\": \"associate\", \"value\": 29, \"category\": {\"id\": 1, \"name\": \"Citrix\"}, \"duration\": \"75\", \"save_price\": 0, \"categories_id\": 1, \"payable_price\": 0}, {\"label\": \"Citrix CC-WMS 1Y0-110 Certification Exam Preparation Kit\", \"level\": \"associate\", \"value\": 98, \"category\": {\"id\": 1, \"name\": \"Citrix\"}, \"duration\": \"75\", \"save_price\": 0, \"categories_id\": 1, \"payable_price\": 0}, {\"label\": \"Citrix CC-XenServer 1Y0-120 Certification Exam Preparation Kit\", \"level\": \"associate\", \"value\": 95, \"category\": {\"id\": 1, \"name\": \"Citrix\"}, \"duration\": \"60\", \"save_price\": 0, \"categories_id\": 1, \"payable_price\": 0}, {\"label\": \"Citrix CC-DaaS-MA 1Y0-150 Exam Preparation Kit\", \"level\": \"associate\", \"value\": 4, \"category\": {\"id\": 1, \"name\": \"Citrix\"}, \"duration\": \"115\", \"save_price\": 0, \"categories_id\": 1, \"payable_price\": 0}]",
                "voucher_valid_for": "This Voucher is valid for Only<br />India",
                "coupon_code": null,
                "is_stock": 0,
                "inr_price": "15600",
                "is_inr_discount": 1,
                "inr_discount_price": "15",
                "inr_min_discount_price": "5180",
                "usd_price": "200",
                "is_usd_discount": 1,
                "usd_discount_price": "15",
                "usd_min_discount_price": "160",
                "sgd_price": "100",
                "is_sgd_discount": 1,
                "sgd_discount_price": "20",
                "sgd_min_discount_price": "95",
                "eur_price": null,
                "is_eur_discount": null,
                "eur_discount_price": null,
                "eur_min_discount_price": null,
                "meta_title": "Citrix Certification Assessment Voucher | Citrix Assessment Voucher",
                "meta_keyword": "Citrix Certification Assessment Voucher",
                "meta_description": "Get special offer on Citrix Certification Assessment Voucher at SSDN Technologies. Become citrix certified today!!",
                "breadcrumb": null,
                "status": "active",
                "is_front": 0,
                "admin_id": 12,
                "coupon_id": null,
                "deleted_at": null,
                "created_at": "2023-03-10T06:22:37.000Z",
                "updated_at": "2023-11-06T11:06:17.000Z",
                "category_id": 1,
                "category_name": "Citrix",
                "category_slug": "citrix",
                "category_heading": "Citrix Exam Preparation",
                "parent_category_id": null,
                "parent_category_name": null,
                "parent_category_slug": null,
                "parent_category_heading": null
            },
            {
                "id": 1,
                "name": "Citrix CCA-N 1Y0-241 Practice Exam Questions",
                "slug": "citrix-1y0-240-exam-questions",
                "categories_id": 1,
                "heading": "Citrix CCA-N 1Y0-241 Practice Exam Questions",
                "description": "<p>Citrix Deploy and Manage Citrix ADC with Traffic Management covers basic networking, adc platforms, high availability, load balancing, SSL offing, security, troubleshooting, default policies, URL transformation, switching, optimization&nbsp;and load balancing for global servers. The&nbsp;Citrix 1Y0-241&nbsp;exam<strong>&nbsp;</strong>is intended for IT professionals who install, configure &amp; manage Citrix Virtual Apps and Desktops 7 moreover on-premises or in the Citrix Cloud. If you are looking for the right &nbsp;material for the citrix exam prep then this is the right platform for you. Purchase&nbsp;Citrix CCA-N 1Y0-241&nbsp;exam kit and clear your certification in first attempt.&nbsp;</p>\r\n<h2>Key Features of our 1Y0-241&nbsp;Practice Exam:&nbsp;</h2>\r\n<ul>\r\n<li>Get unlimited access for 1 month.</li>\r\n<li>100% Mobile accessible.</li>\r\n<li>Designed by Industry experts.</li>\r\n<li>Latest updated questions.</li>\r\n<li>Gives you a similar experience for giving 1Y0-241&nbsp;exam.</li>\r\n<li>Make you 100% prepare for actual certification exam.&nbsp;</li>\r\n<li>Let you Know your weakness and strength before taking certification exam.&nbsp;</li>\r\n</ul>",
                "image": "ec-1571472923511.png",
                "image_alt_tag": "citrix 1y0-241 exam dumps",
                "highlights": "[\"Exam Code: 1Y0-241\", \"Duration: 90 minutes\", \"Number of Questions: 64\", \"Passing Score: 61%\"]",
                "exam_instruction": "<p>Exam Name: Deploy and Manage Citrix ADC with Traffic Management<br>Exam Code: 1Y0-241<br>Exam Duration: 90&nbsp;Minutes<br>Number of Questions: 64<br>Passing Score: 61%<br>Credit Certificate: CCA-N /&nbsp;CCA-AppDS<br><strong>Note: Do not click SUBMIT button before completing your exam.</strong></p>",
                "price_type": "paid",
                "inr_price": "3500",
                "is_inr_discount": 1,
                "inr_discount_price": "40",
                "level": "associate",
                "duration": "90",
                "number_of_question": 64,
                "total_marks": 1000,
                "passing_marks": 61,
                "is_re_attempt": 1,
                "is_certificate": 1,
                "certificate_name": "Certificate",
                "result_declaration": "At the time",
                "assessment_ids": "false",
                "voucher_ids": "[{\"value\":3,\"label\":\"Citrix Certified Expert- Virtualization - 1Y0-403 Exam Voucher\"},{\"value\":2,\"label\":\"Citrix Certified Professional - Virtualization 1Y0-312 Exam Voucher\"},{\"value\":6,\"label\":\"Citrix Certified Associate - Networking - 1Y0-241 Exam Voucher\"}]",
                "updated_by": "5",
                "add_questions": "manual",
                "meta_title": "100% Real CCA-N 1Y0-241 Practice Exam Questions | Citrix 1Y0-241 Practice Exam",
                "meta_keyword": "citrix exam, citrix cca-n exam, 1y0-241 exam preparation online, citrix cca-n exam dumps, 1y0-241 exam dumps, Citrix CCA-N 1Y0-241 Practice Exam Questions, citrix exam prep",
                "meta_description": "SSDN Technologies Citrix CCA-N or CCA-AppDS 1Y0-241 Practice Exam guide is planned to provide candidates with necessary information about the Citrix CCA-N exam.",
                "breadcrumb": "<script type=\"application/ld+json\">{ \"@context\": \"https://schema.org/\", \"@type\": \"Product\", \"brand\": { \"@type\": \"Brand\", \"name\": \"Citrix\" }, \"description\": \"SSDN Technologies offers Citrix CCA-N 1Y0-241 Practice Exam Questions to test your knowledge & ability before appearing for Citrix Certification exam. Buy Now.\", \"sku\": \"NA\", \"mpn\": \"NA\", \"image\": \"https://www.ssdntech.com/assets/images/assessment/ec-1573100446770.png\", \"name\": \"Citrix CCA-N 1Y0-241 Practice Exam Questions\", \"review\": { \"@type\": \"Review\", \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\" }, \"author\": { \"@type\": \"Person\", \"name\": \"NAVEEN SINGH\" }, \"reviewBody\": \"I completed my assissement with 70% passsing marks, Thank you SSDN!!\" }, \"aggregateRating\": { \"@type\": \"AggregateRating\", \"ratingValue\": \"99\", \"bestRating\": \"100\", \"ratingCount\": \"6\" }, \"offers\": { \"@type\": \"Offer\", \"url\": \"https://www.ssdntech.com/assessment/citrix/citrix-1y0-241-exam-questions\", \"priceCurrency\": \"USD\", \"price\": \"22.00\", \"priceValidUntil\": \"2021-12-12\", \"itemCondition\": \"https://schema.org/UsedCondition\", \"availability\": \"https://schema.org/InStock\", \"seller\": { \"@type\": \"Organization\", \"name\": \"SSDN technologies\" } } }</script>",
                "status": "active",
                "is_front": 0,
                "coupon_id": null,
                "deleted_at": null,
                "created_at": "2023-03-14T07:29:37.000Z",
                "updated_at": "2023-08-29T06:49:26.000Z",
                "category_id": 1,
                "category_name": "Citrix",
                "category_slug": "citrix"
            }
        ]
    };
  
    // Convert JSON data to string
    const responseData = JSON.stringify(jsonData);

    // Write the JSON response to the client
    res.write(responseData);
    
    // End the response
    res.end();
  });
  
  // Define the port to listen on
  const PORT = process.env.PORT || 3000;
  
  // Start the server and listen on the defined port
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
