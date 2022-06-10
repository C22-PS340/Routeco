package com.example.routeco.ui.splash

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import com.example.routeco.R
import com.example.routeco.databinding.ActivitySplashBinding
import com.example.routeco.ui.home.HomeFragment

class SplashActivity : AppCompatActivity() {
    companion object {
        const val TIME_SPLASH = 1500L
    }

    private lateinit var splashBinding: ActivitySplashBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        splashBinding = ActivitySplashBinding.inflate(layoutInflater)
        setContentView(splashBinding.root)

        val handler = Handler(mainLooper)

        handler.postDelayed({
            val intent = Intent(this@SplashActivity, HomeFragment::class.java)
            startActivity(intent)
            finish()
        }, TIME_SPLASH)


        supportActionBar?.hide()
    }
}