<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Add Episode (Administrator)</title>
	<?php echo "<link rel='stylesheet' type='text/css' href='common_theme.css' />";?>
	<?php echo "<link rel='stylesheet' type='text/css' href='add_episode.css' />";?>
</head>
<body>
	<div id="modal-bg" class="modal-bg">
		<div id="modal-content" class="modal-content"></div>
	</div>
	<?php include "page_header.php" ?>
	<?php include "create_series_page_navs.php" ?>
	<h2 class="page-title">
		Administrator - Add Episode
	</h2>
	<div id="add-episode-suggestions"></div>
	<form id='search-series-form' method='post'>
        <div class='field-block'>
            <p class='field-name'>Series Name:</p>
            <input id='search-series-name' name='search-series-name' type='text' oninput="findSeriesSuggestions(this)" placeholder='Series name...' required>
        </div>
        <div class='field-block field-space'>
            <button id="add-episode-find-series-button" class="no-left-margin" type='button' onclick="findSeries()">Search</button>
        </div>
    </form>
	<div id="add-episode-no-season-alert"><h2>This series currently does not have any season!</h2></div>
    <div id='add-episode-content'>
        <div id='search-result'>
            <img id='search-result-series-banner-image'>
            <div id='search-result-series-details'>
                <p id='search-result-series-name'></p>
                <p id='search-result-series-total-season'></p>
                <p id='search-result-total-series-episode'></p>
                <p id='search-result-series-rating'></p>
                <p id='search-result-series-release-date'></p>
				<p id='search-result-series-awards'></p>
                <p id='search-result-series-description'></p>
            </div>
        </div>
		<form id='add-episode-form' class="field-space" method='post' enctype='multipart/form-data'>
			<div class='field-block field-space'>
				<div class='image-selection-block'>
					<p class='field-name'>Episode Banner:</p>
					<div>
						<button type='button' for='file' onclick="document.getElementById('add-episode-episode-banner').click()">Browse...</button>
						<input id='add-episode-episode-banner' name='add-episode-episode-banner' class="select-banner" type='file' accept='image/*' onchange="getImage(event)" required>
					</div>
				</div>
				<div id="add-episode-episode-banner-display" class='selected-image-view'></div>
			</div>
			<div class='field-block field-space'>
				<p class='field-name'>Season Number:</p>
				<select name='add-episode-season-number' id='add-episode-episode-season-number'></select>
			</div>
			<div class='field-block field-space'>
				<p class='field-name'>Episode Number:</p>
				<input name='add-episode-episode-number' id='add-episode-episode-number' type='number' placeholder='Episode number...' required>
			</div>
			<div class='field-block field-space'>
				<p class='field-name'>Episode Title:</p>
				<input name='add-episode-episode-title' id='add-episode-episode-title' type='text' placeholder='Episode title...' required>
			</div>
			<div class='field-block field-space'>
				<p class='field-name'>Episode Release Date:</p>
				<input name='add-episode-release-date' id='add-episode-episode-release-date' type='date' required>
			</div>
			<div class='field-block field-space'>
				<p class='field-name'>Episode Duration:</p>
				<input name='add-episode-episode-duration' id='add-episode-episode-duration' type='number' placeholder='Episode duration in minutes...' required>
			</div>
			<div class='field-block field-space'>
				<p class='field-name'>Episode Description:</p>
				<textarea name='add-episode-description' id='add-episode-episode-description' form='add-episode-form' required></textarea>
			</div>
			<div class='field-block field-space'>
				<p class='field-name'>Episode Director:</p>
				<div class='field-block'>
					<div class="multi-data-block" id='episode-director-block'>
						<div class='field-block'>
							<p class='field-name'>Director Name:</p>
							<input name='add-episode-director-name' id='add-episode-episode-director-name' type='text' oninput="findDirectorSuggestions(this)" placeholder='Director name...' required>
						</div>
						<div class='field-block'>
							<p class='field-name'>Director Gender:</p>
							<select name='add-episode-director-gender' id='add-episode-episode-director-gender'>
								<option value='null'></option>
								<option value='Male'>Male</option>
								<option value='Female'>Female</option>
							</select>
						</div>
						<div class='field-block'>
							<p class='field-name'>Director Email:</p>
							<input name='add-episode-director-email' id='add-episode-episode-director-email' type='email' placeholder='Director email...' required>
						</div>
					</div>
				</div>
			</div>
			<div class='field-block field-space'>
				<p class='field-name'>Episode Cast:</p>
				<ul id="add-episode-episode-cast-list"></ul>
				<div class='field-block field-space'>
					<div class="multi-data-block" id='episode-cast-block'>
						<div class='field-block'>
							<p class='field-name'>Cast Name:</p>
							<input name='add-episode-cast-name' id='add-episode-episode-cast-name' type='text' oninput="findCastSuggestions(this)" placeholder='Cast name...' required>
						</div>
						<div class='field-block'>
							<p class='field-name'>Cast Gender:</p>
							<select name='add-episode-cast-gender' id='add-episode-episode-cast-gender'>
								<option value='null'></option>
								<option value='Male'>Male</option>
								<option value='Female'>Female</option>
							</select>
						</div>
						<div class='field-block'>
							<p class='field-name'>Cast Email:</p>
							<input name='add-episode-cast-email' id='add-episode-episode-cast-email' type='email' placeholder='Cast email...' required>
						</div>
						<div class='field-block field-space'>
							<button class="no-left-margin" type="button" onclick="addCast()">Add New Cast</button>
						</div>
					</div>
				</div>
			</div>
			<div class='field-block field-space'>
				<button class="no-left-margin" type="button" onclick="addEpisode()">Add Episode</button>
			</div>
			<div class='field-block field-space'>
                <button class="no-left-margin" type="button" onclick="back()">Back</button>
            </div>
		</form>
    </div>
	<?php echo '<script type="text/javascript" src="add_episode.js"></script>';?>
</body>
</html>