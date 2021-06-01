
--
-- Table structure for table `247custompages`
--

CREATE TABLE `247custompages` (
  `id` int(11) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `token_validation_id` int(11) DEFAULT NULL,
  `page_bc_id` varchar(255) NOT NULL,
  `api_response` longtext NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `api_log`
--

CREATE TABLE `api_log` (
  `id` int(11) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `token_validation_id` int(11) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  `action` varchar(255) NOT NULL,
  `api_url` varchar(255) NOT NULL,
  `api_request` longtext DEFAULT NULL,
  `api_response` longtext DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cardsaver_scripts`
--

CREATE TABLE `cardsaver_scripts` (
  `script_id` int(11) NOT NULL,
  `token_validation_id` int(11) DEFAULT NULL,
  `script_email_id` varchar(255) NOT NULL,
  `script_filename` varchar(255) NOT NULL,
  `script_code` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `api_response` longtext DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cardsaver_token_validation`
--

CREATE TABLE `cardsaver_token_validation` (
  `validation_id` int(11) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `merchant_id` varchar(255) DEFAULT NULL,
  `cardstream_signature` varchar(255) DEFAULT NULL,
  `sellerdb` varchar(255) NOT NULL,
  `acess_token` varchar(255) DEFAULT NULL,
  `store_hash` varchar(255) DEFAULT NULL,
  `is_enable` int(11) NOT NULL DEFAULT 0,
  `payment_option` enum('CFO','CFS') NOT NULL DEFAULT 'CFO',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `custom_cardsaverpay_button`
--

CREATE TABLE `custom_cardsaverpay_button` (
  `id` int(11) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `token_validation_id` int(11) DEFAULT NULL,
  `container_id` varchar(255) NOT NULL,
  `css_prop` longtext NOT NULL,
  `html_code` longtext DEFAULT NULL,
  `is_enabled` int(11) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id` int(11) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `token_validation_id` int(11) DEFAULT NULL,
  `invoice_id` varchar(255) NOT NULL,
  `order_id` varchar(255) NOT NULL,
  `bg_customer_id` varchar(255) NOT NULL,
  `reponse_params` longtext NOT NULL,
  `total_inc_tax` float NOT NULL,
  `total_ex_tax` float NOT NULL,
  `currecy` varchar(20) NOT NULL,
  `created_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `order_payment_details`
--

CREATE TABLE `order_payment_details` (
  `id` int(11) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `token_validation_id` int(11) DEFAULT NULL,
  `order_id` varchar(255) NOT NULL,
  `cart_id` varchar(255) NOT NULL,
  `type` enum('SALE','captureDelay') NOT NULL DEFAULT 'SALE',
  `total_amount` float NOT NULL,
  `amount_paid` float NOT NULL,
  `currency` varchar(10) NOT NULL,
  `status` enum('PENDING','CONFIRMED','FAILED','') NOT NULL DEFAULT 'PENDING',
  `settlement_status` varchar(255) NOT NULL DEFAULT 'PENDING',
  `params` longtext DEFAULT NULL,
  `api_response` longtext DEFAULT NULL,
  `settlement_response` longtext DEFAULT NULL,
  `created_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `order_refund`
--

CREATE TABLE `order_refund` (
  `r_id` int(11) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `token_validation_id` int(11) DEFAULT NULL,
  `invoice_id` varchar(255) NOT NULL,
  `refund_status` varchar(255) NOT NULL,
  `refund_amount` float NOT NULL,
  `api_request` longtext DEFAULT NULL,
  `api_response` longtext DEFAULT NULL,
  `created_date` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `247custompages`
--
ALTER TABLE `247custompages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `api_log`
--
ALTER TABLE `api_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cardsaver_scripts`
--
ALTER TABLE `cardsaver_scripts`
  ADD PRIMARY KEY (`script_id`);

--
-- Indexes for table `cardsaver_token_validation`
--
ALTER TABLE `cardsaver_token_validation`
  ADD PRIMARY KEY (`validation_id`);

--
-- Indexes for table `custom_cardsaverpay_button`
--
ALTER TABLE `custom_cardsaverpay_button`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_payment_details`
--
ALTER TABLE `order_payment_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_refund`
--
ALTER TABLE `order_refund`
  ADD PRIMARY KEY (`r_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `247custompages`
--
ALTER TABLE `247custompages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `api_log`
--
ALTER TABLE `api_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cardsaver_scripts`
--
ALTER TABLE `cardsaver_scripts`
  MODIFY `script_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cardsaver_token_validation`
--
ALTER TABLE `cardsaver_token_validation`
  MODIFY `validation_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `custom_cardsaverpay_button`
--
ALTER TABLE `custom_cardsaverpay_button`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_payment_details`
--
ALTER TABLE `order_payment_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_refund`
--
ALTER TABLE `order_refund`
  MODIFY `r_id` int(11) NOT NULL AUTO_INCREMENT;